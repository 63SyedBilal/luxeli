import mongoose, { Schema, Document, model, models } from "mongoose";

export interface ILaundryRequest extends Document {
  service: string;
  roomName: string;
  residentialName: string;
  services: string[];
  piece: number;
  pickup: Date;
  priority: "low" | "medium" | "high";
  notes?: string;
  assigne?: {
    name: string;
    staffId: string;
    profilePic?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const LaundryRequestSchema: Schema = new Schema(
  {
    service: { type: String, default: "laundry" },
    roomName: { type: String, required: true },
    residentialName: { type: String, required: true },
    services: [
      {
        type: String,
        enum: ["wash", "wash&iron", "dry cleaning", "duvets", "shoes", "others"],
        required: true,
      },
    ],
    piece: { type: Number, required: true },
    pickup: { type: Date, required: true },
    priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
    notes: { type: String },
    assigne: {
      name: { type: String },
      staffId: { type: String },
      profilePic: { type: String },
    },
  },
  { timestamps: true }
);

// 🔹 Use existing model if it exists
const LaundryRequest =
  models.LaundryRequest || model<ILaundryRequest>("LaundryRequest", LaundryRequestSchema);

export default LaundryRequest;
