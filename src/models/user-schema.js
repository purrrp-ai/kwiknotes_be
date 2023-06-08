import { model, Schema } from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const tokenSchema = new Schema({
    token: { type: String, required: true },
    createdAt: {
      type: Date,
      required: [true, "token initialization date is required"],
      default: Date.now,
    },
    expiresAt: { type: Date, required: true },
    userAgent: { type: String },
  }),
  noteSchema = new Schema(
    {
      title: String,
      content: String,
      pinned: Boolean,
      stashed: Boolean,
      binned: Boolean,
      prompt: {
        date: { type: String },
        time: { type: String },
        dueDate: { type: Date },
        repeat: {
          type: String,
          enum: ["One time", "Daily", "Weekly", "Monthly", "Yearly"],
        },
      },
    },
    { timestamps: true }
  );

noteSchema.pre("save", function (next) {
  if (this.prompt) {
    const prompt = this.prompt;
    if (prompt.date && prompt.time) {
      const { date, time } = this.prompt;
      const [hours, minutes] = time.split(":");
      const dueDate = new Date(date);
      dueDate.setHours(hours);
      dueDate.setMinutes(minutes);
      this.prompt.dueDate = dueDate;
    }
  }

  next();
});

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    password: {
      type: String,
      required: [true, "email is required"],
      minlength: 9,
    },
    tokensLimit: { type: Number, default: 5 },
    tokens: [tokenSchema],
    notes: [noteSchema],
  },
  { timestamps: true }
);

UserSchema.plugin(mongooseUniqueValidator);

UserSchema.set("toJSON", {
  transform: (_doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

export const User = model("User", UserSchema);
