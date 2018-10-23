# Creating a hand toy

There may be problems if the frozen graph came from a different TF version than I am using. I am using

> python -c 'import tensorflow as tf; print(tf.__version__)'  # for Python 2
> 1.11.0

I need to freeze my checkpoint
https://pythonprogramming.net/testing-custom-object-detector-tensorflow-object-detection-api-tutorial/?completed=/training-custom-objects-tensorflow-object-detection-api-tutorial/

I downloaded
https://github.com/tensorflow/models/blob/master/research/object_detection/export_inference_graph.py

But I need the object_detection running
Do I need all of it?

Install
Whatever I need to run export_inference_graph.py

> brew install protobuf
> pip install Pillow
> pip install matplotlib

> cd handtracking/model-checkpoint
> python path_to/tensorflow-models/research/object_detection/export_inference_graph.py --input_type image_tensor --pipeline_config_path ./ssd_mobilenet_v1_coco.config --trained_checkpoint_prefix ./model.ckpt-200002 --output_directory ../../hand_inference_graph



How do I use the converter

>  cd hand_inference_graph
>  tensorflowjs_converter --input_format=tf_frozen_model --output_node_names='detection_boxes,detection_scores,detection_classes,num_detections' ./frozen_inference_graph.pb ../hand_inference_tfjs

output_node_names? I just got them from the detect_single_threaded.py

I want to check what my model looks like:
So I use tensor board
https://medium.com/@daj/how-to-inspect-a-pre-trained-tensorflow-model-5fd2ee79ced0

Now I have the model, I need to make a library, "hand_inference"
Based on
'@tensorflow-models/posenet'



-----

## THE INFERENCE LIBRARY

```javascript
export async function bindPage() {
  // Load the PoseNet model weights with architecture 0.75
  const net = await posenet.load(0.75);
}


if (guiState.changeToArchitecture) {
      // Important to purge variables and free up GPU memory
      guiState.net.dispose();

      // Load the PoseNet model weights for either the 0.50, 0.75, 1.00, or 1.01
      // version
      guiState.net = await posenet.load(+guiState.changeToArchitecture);

      guiState.changeToArchitecture = null;
    }


const pose = await guiState.net.estimateSinglePose(
            video, imageScaleFactor, flipHorizontal, outputStride);

```


## THE HAND VIEWER

http://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage



## THE HAND VISUALIZER


Learning how to make a typescript package.json
"jsnext:main" is for es6 usage

I don't know if I need a "types"

Different types of dependencies,
https://yarnpkg.com/lang/en/docs/dependency-types/
"peerDependencies"

Going to use the same structure that posenet for hand-model
Then going to use demos as the template for hand-visuals



## TODO

Start by runnning effects over the pose!

Start by getting a working import of hand-model and see put through model

update rollup.config.js
Check if test is working


