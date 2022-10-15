$(document).ready(function () {
    jQuery.validator.addMethod("alphanumeric", function (value, element) {
        return this.optional(element) || /^[\w.]+$/i.test(value);
    }, "Alphabets & Numericals Only!");
    jQuery.validator.addMethod("grammarCheck", (value, element) => {
        jQuery.get('assets/js/corncob_lowercase.txt', async (data) => {
            //process text file line by line
            var array = data.split("\n")
            const status = value.split(' ')
            console.log('STATUS', status);

            const stat = []
            console.log('main Stat', stat);
        });
        // return this.optional(element) || /^[\w.]+$/i.test(value);
    }, "Invalid Words Found !");
    $("#gfrom").validate({
        rules: {
            email: {
                required: true,
                minlength: 5,
                maxlength: 20
            },
            name: {
                required: true,
                minlength: 3,
                maxlength: 20,
            },
            subject: {
                required: true,
                minlength: 6,
                maxlength: 25,
                alphanumeric: true,
                // grammarCheck: true,
            },
            message: {
                required: true,
                minlength: 20,
                maxlength: 75,
                // grammarCheck: true,
            }
        },
        messages: {
            // message: {
            //     minlength: "Min 20 Characters Required",
            //     maxlength: "Max 75 Characters"

            // },
            // subject: {
            //     maxlength: "Max 25 Characters",
            // }
        },

    })
})

$(document).ready(() => {
    $("#gform").submit((e) => {
        e.preventDefault()
        console.log('ajax called here');
        // $.ajax({
        //   url: 'null',
        //   method: 'post',
        //   data: $('#gform').serialize(),
        //   success: (response) => {
        //     console.log('FETCHED RESPONSE', response);

        //   }
        // })
    })
})

