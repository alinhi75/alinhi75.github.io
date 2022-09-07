---
title: "House Price Estimator With Concatenating CNN(image) and MLP(its textual info: room, bath, etc...)"
collection: projects
---
***In this repo with combining text data with image data we'll going to create a regression model, which predict the price of the house. I'll Concatenate MLP (csv) and CNN (image) data together. ***

* [Github repo](https://github.com/CenaAshoori/ML-House-Price-Estimator-Concat-Image-csv)
* [In another repo](https://github.com/CenaAshoori/Estate-Price-Predictor) of mine also you can see another project for estate prediction. In that project I just use textual file such as location, area, room. It isn't precise but it has GUI.

## Prediction
![](https://github.com/CenaAshoori/ML-House-Price-Estimator-Concat-Image-csv/raw/main/prediction-ex/pic.jpg)
## 1- Create MLP For `csv`
```python
# define our MLP network
mlp = Sequential()
mlp.add(Dense(8, input_dim=dim, activation="relu"))
mlp.add(Dense(4, activation="relu"))
```
## 2- Create CNN For `Images`
```python
# loop over the number of filters
for (i, f) in enumerate(filters):
    # if this is the first CONV layer then set the input
    # appropriately
    if i == 0:
        x = inputs

    # CONV => RELU => BN => POOL
    x = Conv2D(f, (3, 3), padding="same")(x)
    x = Activation("relu")(x)
    x = BatchNormalization(axis=chanDim)(x)
    x = MaxPooling2D(pool_size=(2, 2))(x)
    
# flatten the volume, then FC => RELU => BN => DROPOUT
x = Flatten()(x)
x = Dense(16)(x)
x = Activation("relu")(x)
x = BatchNormalization(axis=chanDim)(x)
x = Dropout(0.5)(x)

# apply another FC layer, this one to match the number of nodes
# coming out of the MLP
x = Dense(4)(x)
x = Activation("relu")(x)

# construct the CNN
cnn = Model(inputs, x)

```

## 3- Concatenate MLP (csv) and CNN (image) data together

```python
combinedInput = concatenate([mlp.output, cnn.output])

# our final FC layer head will have two dense layers, the final one
# being our regression head
x = Dense(4, activation="relu")(combinedInput)
x = Dense(1, activation="linear")(x)

model = Model(inputs=[mlp.input, cnn.input], outputs=x)
```