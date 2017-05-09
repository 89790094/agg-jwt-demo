module.exports = mongoose => {
    const MemberSchema = new mongoose.Schema({
        mobile: { type: String },
        pwd: { type: String },
        lasttime: { type: Date, default: Date.now() }
    });
    return mongoose.model('Member', MemberSchema, 'member');
}


// module.exports = app => {
//     const mongoose = app.mongoose;
//     const MemberSchema = new mongoose.Schema({
//         mobile: { type: String },
//         pwd: { type: String },
//         lasttime: { type: Date, default: Date.now() }
//     });
//     return mongoose.model('Member', MemberSchema);
// }