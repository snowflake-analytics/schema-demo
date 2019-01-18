import React, { Component } from 'react';
import { RedocStandalone as JsonSchemaView } from 'redoc';
import './App.css';

const jsonNode = {
  "description":"This is an example schema for Pet",
  "type":"object",
  "properties":{
    "category":{
      "description":"Categories this pet belongs to",
      "type":"object",
      "properties":{
        "name":{
          "description":"Category name",
          "type":"string",
          "minLength":1
        },
        "sub":{
          "description":"Test Sub Category",
          "type":"object",
          "properties":{
            "prop1":{
              "type":"string",
              "description":"Dumb property"
            }
          }
        }
      }
    },
    "name":{
      "type":"string",
      "description":"The name given to a pet",
      "example":"Guru"
    },
    "photoUrls":{
      "description":"The list of URLs to a cute photos featuring pet",
      "type":"array",
      "items":{
        "type":"string",
        "format":"uri"
      },
      "maxItems":20
    },
    "tags":{
      "description":"Tags attached to the pet.",
      "type":"array",
      "items":{
        "description":"Tag name",
        "type":"string",
        "minLength":1
      },
      "minItems":1
    },
    "status":{
      "description":"Pet status in the store",
      "type":"string",
      "enum":[
        "available",
        "pending",
        "sold"
      ]
    },
    "petType":{
      "description":"Type of a pet",
      "type":"string",
      "enum":[
        "cat",
        "dog",
        "bee"
      ]
    },
    "huntingSkill":{
      "description":"The measured skill for hunting.",
      "type":"string",
      "default":"lazy",
      "enum":[
        "clueless",
        "lazy",
        "adventurous",
        "aggressive"
      ]
    }
  },
  "required":[
    "name",
    "photoUrls",
    "huntingSkill"
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <JsonSchemaView specNode={jsonNode} />
      </div>
    );
  }
}

export default App;
