import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Image} from "cloudinary-react";

const positions = {
  'left': 'west',
  'right': 'east',
  'center': 'center',
  'top': 'north',
  'bottom': 'south',
}

class CloudinaryImage extends Component {
  render() {
    return this.props.cloudName
      ? (<div>
        {this.props.isLoaded === true
          ? <Image
            cloudName={this.props.cloudName}
            publicId={this.props.imageId}
            width={this.props.width }
            height={this.props.height}
            gravity={positions[this.props.position] || 'center'}
            crop="fill"
          />
          : <Image cloudName={this.props.cloudName} publicId={this.props.imageId} width="150" crop="thumb"/>
        }
      </div>)
      : null
  }
}

CloudinaryImage.propTypes = {
  cloudName: PropTypes.string.isRequired
}

export default CloudinaryImage
