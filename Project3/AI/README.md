# AI Development

> Image Classification
>
> Object Detection

<br/>

<br/>

## Image Classification

> 20 classes
>
> Fine Tuning

<br/>

#### Data

* `20 classes`, `35,806 images`
* `1 class`, `1,679 ~ 1,937 images`
* `1.97GB`

<br/>

#### Modeling

* `Xception` Fine Tuning
  * `Xception Base Layer`
  * `Flatten Layer`
  * `Dense Layer 256, Activation ReLU`
  * `Dropout 0.5`
  * `Dense Layer 20, Activation SoftMax`
* Image Augmentation
  * `rotation range` : 40
  * `shear range` : 0.2
  * `zoom range` : 0.2
  * `horizontal flip` : True
  * `vertical flip` : True
* 1st Train
  * `15 epochs`
  * `Learning Rate` : 0.000001
  * Train only top layer (Not base layer)
* 2nd Train
  * `50 epochs`
  * `Learning Rate` : 0.0000005
  * Train all params (with base layer)

<br/>

#### Score

* Train
  * Loss : 0.0157
  * Accuracy : 0.9961
* Validation
  * Loss : 0.0265
  * Accuracy : **0.9912**
* Test
  * Loss : 
  * Accuracy : 0.96

