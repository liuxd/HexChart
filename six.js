var six = {
    bg_default_color: '#99ccff',
    value_default_color: '#ffff99',
    x_offset: 30,
    ssin: function(degree) {
        return Math.sin(degree * Math.PI / 180);
    },
    init: function(id, side_length, names, color) {
        this.side_length = side_length;
        this.six = document.getElementById(id);
        this.six.width = this.side_length * 2 * this.ssin(60) + this.x_offset * 2;
        this.six.height = this.side_length * 2;

        var width = this.six.width;
        var height = this.six.height;
        var S = this.x_offset;

        if (typeof (color) === 'undefined') {
            color = this.bg_default_color;
        }

        sixcontext = this.six.getContext('2d');
        sixcontext.fillStyle = color;
        sixcontext.strokeStyle = color;
        sixcontext.beginPath();
        sixcontext.moveTo(width / 2, 0);
        sixcontext.lineTo(width - S, height / 4);
        sixcontext.lineTo(width - S, height * 3 / 4);
        sixcontext.lineTo(width / 2, height);
        sixcontext.lineTo(S, height * 3 / 4);
        sixcontext.lineTo(S, height / 4);
        sixcontext.lineTo(width / 2, 0);
        sixcontext.stroke();
        sixcontext.fill();
        sixcontext.fillText(names[0], width / 2 + S / 2, 10);
        sixcontext.fillText(names[1], width - S, height / 4);
        sixcontext.fillText(names[2], width - S, height * 3 / 4);
        sixcontext.fillText(names[3], width / 2 + S / 2, height);
        sixcontext.fillText(names[4], 0, height * 3 / 4);
        sixcontext.fillText(names[5], 0, height / 4);
    },
    draw: function(values, color) {
        if (values.length < 6) {
            return false;
        }

        for (i in values) {
            values[i] = parseFloat(values[i]);

            if (values[i] > 1 || values[i] < 0) {
                return false;
            }
        }

        if (typeof (color) === 'undefined') {
            color = this.value_default_color;
        }

        var width = this.six.width;
        var L = this.side_length;
        var S = this.x_offset;
        var V = values;

        sixcontext = this.six.getContext('2d');
        sixcontext.fillStyle = color;
        sixcontext.strokeStyle = color;
        sixcontext.beginPath();
        sixcontext.moveTo(width / 2, L * (1 - V[0]));
        sixcontext.lineTo(this.ssin(60) * L * (1 + V[1]) + S, (1 - V[1] / 2) * L);
        sixcontext.lineTo(this.ssin(60) * L * (1 + V[2]) + S, (1 + V[2] / 2) * L);
        sixcontext.lineTo(width / 2, (1 + V[3]) * L);
        sixcontext.lineTo(this.ssin(60) * L * (1 - V[4]) + S, (1 + V[4] / 2) * L);
        sixcontext.lineTo(this.ssin(60) * L * (1 - V[5]) + S, (1 - V[5] / 2) * L);
        sixcontext.lineTo(width / 2, L * (1 - V[0]));
        sixcontext.stroke();
        sixcontext.fill();
    }
};