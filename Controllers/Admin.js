const Admin = require('../Models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const admin = await Admin.findOne({ email });
        console.log('Admin found:', admin);
        
        // Debug: Check all admins
        const allAdmins = await Admin.find({});
        console.log('All admins:', allAdmins);
        
        if (!admin) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log('Password comparison:', password, '!==', admin.password, '=', password !== admin.password);
        
        // Since passwords are not hashed in DB, direct comparison
        if (password !== admin.password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Update lastLogin
        await Admin.findByIdAndUpdate(admin._id, { lastLogin: new Date() });

        // Generate JWT token
        const token = jwt.sign(
            { id: admin._id, email: admin.email, role: admin.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: 'Login successful',
            token,
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
                username: admin.username
            }
        });
    } catch (error) {
        console.log('Error in admin login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { adminLogin };