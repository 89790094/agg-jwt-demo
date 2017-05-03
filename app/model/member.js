module.exports = mongoose => {
    const MemberSchema = new mongoose.Schema({
        mobile: { type: String },
        pwd: { type: String },
        lasttime: { type: Date }
    });
    return mongoose.model('Member', MemberSchema, 'member');
}