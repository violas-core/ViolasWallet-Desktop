/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var get_with_proof_pb = require('./get_with_proof_pb.js');
goog.object.extend(proto, get_with_proof_pb);
var mempool_status_pb = require('./mempool_status_pb.js');
goog.object.extend(proto, mempool_status_pb);
var transaction_pb = require('./transaction_pb.js');
goog.object.extend(proto, transaction_pb);
var vm_errors_pb = require('./vm_errors_pb.js');
goog.object.extend(proto, vm_errors_pb);
goog.exportSymbol('proto.admission_control.AdmissionControlMsg', null, global);
goog.exportSymbol('proto.admission_control.AdmissionControlStatus', null, global);
goog.exportSymbol('proto.admission_control.AdmissionControlStatusCode', null, global);
goog.exportSymbol('proto.admission_control.SubmitTransactionRequest', null, global);
goog.exportSymbol('proto.admission_control.SubmitTransactionResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.admission_control.AdmissionControlMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.admission_control.AdmissionControlMsg.oneofGroups_);
};
goog.inherits(proto.admission_control.AdmissionControlMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.admission_control.AdmissionControlMsg.displayName = 'proto.admission_control.AdmissionControlMsg';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.admission_control.AdmissionControlMsg.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.admission_control.AdmissionControlMsg.MessageCase = {
  MESSAGE_NOT_SET: 0,
  SUBMIT_TRANSACTION_REQUEST: 1,
  SUBMIT_TRANSACTION_RESPONSE: 2
};

/**
 * @return {proto.admission_control.AdmissionControlMsg.MessageCase}
 */
proto.admission_control.AdmissionControlMsg.prototype.getMessageCase = function() {
  return /** @type {proto.admission_control.AdmissionControlMsg.MessageCase} */(jspb.Message.computeOneofCase(this, proto.admission_control.AdmissionControlMsg.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.admission_control.AdmissionControlMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.admission_control.AdmissionControlMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.admission_control.AdmissionControlMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.admission_control.AdmissionControlMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    submitTransactionRequest: (f = msg.getSubmitTransactionRequest()) && proto.admission_control.SubmitTransactionRequest.toObject(includeInstance, f),
    submitTransactionResponse: (f = msg.getSubmitTransactionResponse()) && proto.admission_control.SubmitTransactionResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.admission_control.AdmissionControlMsg}
 */
proto.admission_control.AdmissionControlMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.admission_control.AdmissionControlMsg;
  return proto.admission_control.AdmissionControlMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.admission_control.AdmissionControlMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.admission_control.AdmissionControlMsg}
 */
proto.admission_control.AdmissionControlMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.admission_control.SubmitTransactionRequest;
      reader.readMessage(value,proto.admission_control.SubmitTransactionRequest.deserializeBinaryFromReader);
      msg.setSubmitTransactionRequest(value);
      break;
    case 2:
      var value = new proto.admission_control.SubmitTransactionResponse;
      reader.readMessage(value,proto.admission_control.SubmitTransactionResponse.deserializeBinaryFromReader);
      msg.setSubmitTransactionResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.admission_control.AdmissionControlMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.admission_control.AdmissionControlMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.admission_control.AdmissionControlMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.admission_control.AdmissionControlMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubmitTransactionRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.admission_control.SubmitTransactionRequest.serializeBinaryToWriter
    );
  }
  f = message.getSubmitTransactionResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.admission_control.SubmitTransactionResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional SubmitTransactionRequest submit_transaction_request = 1;
 * @return {?proto.admission_control.SubmitTransactionRequest}
 */
proto.admission_control.AdmissionControlMsg.prototype.getSubmitTransactionRequest = function() {
  return /** @type{?proto.admission_control.SubmitTransactionRequest} */ (
    jspb.Message.getWrapperField(this, proto.admission_control.SubmitTransactionRequest, 1));
};


/** @param {?proto.admission_control.SubmitTransactionRequest|undefined} value */
proto.admission_control.AdmissionControlMsg.prototype.setSubmitTransactionRequest = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.admission_control.AdmissionControlMsg.oneofGroups_[0], value);
};


proto.admission_control.AdmissionControlMsg.prototype.clearSubmitTransactionRequest = function() {
  this.setSubmitTransactionRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.admission_control.AdmissionControlMsg.prototype.hasSubmitTransactionRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SubmitTransactionResponse submit_transaction_response = 2;
 * @return {?proto.admission_control.SubmitTransactionResponse}
 */
proto.admission_control.AdmissionControlMsg.prototype.getSubmitTransactionResponse = function() {
  return /** @type{?proto.admission_control.SubmitTransactionResponse} */ (
    jspb.Message.getWrapperField(this, proto.admission_control.SubmitTransactionResponse, 2));
};


/** @param {?proto.admission_control.SubmitTransactionResponse|undefined} value */
proto.admission_control.AdmissionControlMsg.prototype.setSubmitTransactionResponse = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.admission_control.AdmissionControlMsg.oneofGroups_[0], value);
};


proto.admission_control.AdmissionControlMsg.prototype.clearSubmitTransactionResponse = function() {
  this.setSubmitTransactionResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.admission_control.AdmissionControlMsg.prototype.hasSubmitTransactionResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.admission_control.SubmitTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.admission_control.SubmitTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.admission_control.SubmitTransactionRequest.displayName = 'proto.admission_control.SubmitTransactionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.admission_control.SubmitTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.admission_control.SubmitTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.admission_control.SubmitTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.admission_control.SubmitTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && transaction_pb.SignedTransaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.admission_control.SubmitTransactionRequest}
 */
proto.admission_control.SubmitTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.admission_control.SubmitTransactionRequest;
  return proto.admission_control.SubmitTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.admission_control.SubmitTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.admission_control.SubmitTransactionRequest}
 */
proto.admission_control.SubmitTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new transaction_pb.SignedTransaction;
      reader.readMessage(value,transaction_pb.SignedTransaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.admission_control.SubmitTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.admission_control.SubmitTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.admission_control.SubmitTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.admission_control.SubmitTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      transaction_pb.SignedTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional types.SignedTransaction transaction = 1;
 * @return {?proto.types.SignedTransaction}
 */
proto.admission_control.SubmitTransactionRequest.prototype.getTransaction = function() {
  return /** @type{?proto.types.SignedTransaction} */ (
    jspb.Message.getWrapperField(this, transaction_pb.SignedTransaction, 1));
};


/** @param {?proto.types.SignedTransaction|undefined} value */
proto.admission_control.SubmitTransactionRequest.prototype.setTransaction = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.admission_control.SubmitTransactionRequest.prototype.clearTransaction = function() {
  this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.admission_control.SubmitTransactionRequest.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.admission_control.AdmissionControlStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.admission_control.AdmissionControlStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.admission_control.AdmissionControlStatus.displayName = 'proto.admission_control.AdmissionControlStatus';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.admission_control.AdmissionControlStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.admission_control.AdmissionControlStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.admission_control.AdmissionControlStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.admission_control.AdmissionControlStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.admission_control.AdmissionControlStatus}
 */
proto.admission_control.AdmissionControlStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.admission_control.AdmissionControlStatus;
  return proto.admission_control.AdmissionControlStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.admission_control.AdmissionControlStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.admission_control.AdmissionControlStatus}
 */
proto.admission_control.AdmissionControlStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.admission_control.AdmissionControlStatusCode} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.admission_control.AdmissionControlStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.admission_control.AdmissionControlStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.admission_control.AdmissionControlStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.admission_control.AdmissionControlStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional AdmissionControlStatusCode code = 1;
 * @return {!proto.admission_control.AdmissionControlStatusCode}
 */
proto.admission_control.AdmissionControlStatus.prototype.getCode = function() {
  return /** @type {!proto.admission_control.AdmissionControlStatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.admission_control.AdmissionControlStatusCode} value */
proto.admission_control.AdmissionControlStatus.prototype.setCode = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.admission_control.AdmissionControlStatus.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.admission_control.AdmissionControlStatus.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.admission_control.SubmitTransactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.admission_control.SubmitTransactionResponse.oneofGroups_);
};
goog.inherits(proto.admission_control.SubmitTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.admission_control.SubmitTransactionResponse.displayName = 'proto.admission_control.SubmitTransactionResponse';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.admission_control.SubmitTransactionResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.admission_control.SubmitTransactionResponse.StatusCase = {
  STATUS_NOT_SET: 0,
  VM_STATUS: 1,
  AC_STATUS: 2,
  MEMPOOL_STATUS: 3
};

/**
 * @return {proto.admission_control.SubmitTransactionResponse.StatusCase}
 */
proto.admission_control.SubmitTransactionResponse.prototype.getStatusCase = function() {
  return /** @type {proto.admission_control.SubmitTransactionResponse.StatusCase} */(jspb.Message.computeOneofCase(this, proto.admission_control.SubmitTransactionResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.admission_control.SubmitTransactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.admission_control.SubmitTransactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.admission_control.SubmitTransactionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.admission_control.SubmitTransactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    vmStatus: (f = msg.getVmStatus()) && vm_errors_pb.VMStatus.toObject(includeInstance, f),
    acStatus: (f = msg.getAcStatus()) && proto.admission_control.AdmissionControlStatus.toObject(includeInstance, f),
    mempoolStatus: (f = msg.getMempoolStatus()) && mempool_status_pb.MempoolAddTransactionStatus.toObject(includeInstance, f),
    validatorId: msg.getValidatorId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.admission_control.SubmitTransactionResponse}
 */
proto.admission_control.SubmitTransactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.admission_control.SubmitTransactionResponse;
  return proto.admission_control.SubmitTransactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.admission_control.SubmitTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.admission_control.SubmitTransactionResponse}
 */
proto.admission_control.SubmitTransactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vm_errors_pb.VMStatus;
      reader.readMessage(value,vm_errors_pb.VMStatus.deserializeBinaryFromReader);
      msg.setVmStatus(value);
      break;
    case 2:
      var value = new proto.admission_control.AdmissionControlStatus;
      reader.readMessage(value,proto.admission_control.AdmissionControlStatus.deserializeBinaryFromReader);
      msg.setAcStatus(value);
      break;
    case 3:
      var value = new mempool_status_pb.MempoolAddTransactionStatus;
      reader.readMessage(value,mempool_status_pb.MempoolAddTransactionStatus.deserializeBinaryFromReader);
      msg.setMempoolStatus(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValidatorId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.admission_control.SubmitTransactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.admission_control.SubmitTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.admission_control.SubmitTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.admission_control.SubmitTransactionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVmStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vm_errors_pb.VMStatus.serializeBinaryToWriter
    );
  }
  f = message.getAcStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.admission_control.AdmissionControlStatus.serializeBinaryToWriter
    );
  }
  f = message.getMempoolStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      mempool_status_pb.MempoolAddTransactionStatus.serializeBinaryToWriter
    );
  }
  f = message.getValidatorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional types.VMStatus vm_status = 1;
 * @return {?proto.types.VMStatus}
 */
proto.admission_control.SubmitTransactionResponse.prototype.getVmStatus = function() {
  return /** @type{?proto.types.VMStatus} */ (
    jspb.Message.getWrapperField(this, vm_errors_pb.VMStatus, 1));
};


/** @param {?proto.types.VMStatus|undefined} value */
proto.admission_control.SubmitTransactionResponse.prototype.setVmStatus = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.admission_control.SubmitTransactionResponse.oneofGroups_[0], value);
};


proto.admission_control.SubmitTransactionResponse.prototype.clearVmStatus = function() {
  this.setVmStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.admission_control.SubmitTransactionResponse.prototype.hasVmStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AdmissionControlStatus ac_status = 2;
 * @return {?proto.admission_control.AdmissionControlStatus}
 */
proto.admission_control.SubmitTransactionResponse.prototype.getAcStatus = function() {
  return /** @type{?proto.admission_control.AdmissionControlStatus} */ (
    jspb.Message.getWrapperField(this, proto.admission_control.AdmissionControlStatus, 2));
};


/** @param {?proto.admission_control.AdmissionControlStatus|undefined} value */
proto.admission_control.SubmitTransactionResponse.prototype.setAcStatus = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.admission_control.SubmitTransactionResponse.oneofGroups_[0], value);
};


proto.admission_control.SubmitTransactionResponse.prototype.clearAcStatus = function() {
  this.setAcStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.admission_control.SubmitTransactionResponse.prototype.hasAcStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional mempool_status.MempoolAddTransactionStatus mempool_status = 3;
 * @return {?proto.mempool_status.MempoolAddTransactionStatus}
 */
proto.admission_control.SubmitTransactionResponse.prototype.getMempoolStatus = function() {
  return /** @type{?proto.mempool_status.MempoolAddTransactionStatus} */ (
    jspb.Message.getWrapperField(this, mempool_status_pb.MempoolAddTransactionStatus, 3));
};


/** @param {?proto.mempool_status.MempoolAddTransactionStatus|undefined} value */
proto.admission_control.SubmitTransactionResponse.prototype.setMempoolStatus = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.admission_control.SubmitTransactionResponse.oneofGroups_[0], value);
};


proto.admission_control.SubmitTransactionResponse.prototype.clearMempoolStatus = function() {
  this.setMempoolStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.admission_control.SubmitTransactionResponse.prototype.hasMempoolStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes validator_id = 4;
 * @return {!(string|Uint8Array)}
 */
proto.admission_control.SubmitTransactionResponse.prototype.getValidatorId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes validator_id = 4;
 * This is a type-conversion wrapper around `getValidatorId()`
 * @return {string}
 */
proto.admission_control.SubmitTransactionResponse.prototype.getValidatorId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValidatorId()));
};


/**
 * optional bytes validator_id = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValidatorId()`
 * @return {!Uint8Array}
 */
proto.admission_control.SubmitTransactionResponse.prototype.getValidatorId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValidatorId()));
};


/** @param {!(string|Uint8Array)} value */
proto.admission_control.SubmitTransactionResponse.prototype.setValidatorId = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.admission_control.AdmissionControlStatusCode = {
  ACCEPTED: 0,
  BLACKLISTED: 1,
  REJECTED: 2
};

goog.object.extend(exports, proto.admission_control);
