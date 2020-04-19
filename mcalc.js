var pres_value = document.getElementById("present-value").value;
var interest = document.getElementById("interest").value;
var n_comp_periods = document.getElementById("period").value;
var t_years = document.getElementById("years").value;



function validate () {
    if (pres_value == "") {
        alert("Please enter the sum of money you invested");
        pres_value.focus();
        return false;
    }

    if (interest == "") {
        alert("Please enter the interest rate");
        interest.focus();
        return false;
    }

    if (n_comp_periods == "") {
        alert("Please enter the compounding period");
        return false;
    }
    if (t_years == "") {
        alert("Please enter the number of years");
        return false;
    }
    return( true );
}

function calc_time_value    (pres_value, interest, n_comp_periods, t_years) {
            result = 1 + (interest / n_comp_periods)
            result = result ** (n_comp_periods * t_years)
            result = result + pres_value
            return result
        }
    
