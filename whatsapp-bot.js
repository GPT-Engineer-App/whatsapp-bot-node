const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

// Initialize the client
const client = new Client({
  authStrategy: new LocalAuth(),
});

// Generate and display QR code for authentication
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
  console.log("QR code generated, scan it with your WhatsApp app.");
});

// Log successful authentication
client.on("ready", () => {
  console.log("Client is ready!");
});

// Respond to messages
client.on("message", (message) => {
  console.log(`Message from ${message.from}: ${message.body}`);

  if (message.body.toLowerCase() === "hello") {
    message.reply("Hello! How can I help you today?");
  }
});

// Initialize the client
client.initialize();
