const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Add a text value'],
    },
    link: {
      type: String,
      required: [true, 'Add a link'],
    },
    type: {
      type: String,
      required: [true, 'Add a type'],
    },
    burdens: {
      type: String,
      required: [true, 'Add charm status'],
    },
    ng: {
      type: String,
      required: [true, 'Add NG status'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)
