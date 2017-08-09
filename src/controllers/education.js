
/**
 * GET /contact
 * Contact form page.
 */
exports.getContact = (req, res) => {
    res.render('education', {
        title: 'Education'
    });
};
