/**
 * sources:
 * [GT3] https://www.gates.com/content/dam/gates/home/knowledge-center/resource-library/catalogs/light-power-and-precision-manual.pdf
 * [GT2] http://files.catalogds.com/domains/gates.pt/pdf/drivedesign_lightpower.pdf
 */
class TC {
    // 1 Nm = 8.85... in-lb
    static conv_inlb_Nm = 8.8507457676;

    // 1 lb = 4.44822 N
    static conv_lb_N = 4.44822;

    // 1 m/s = 196.85 f/s
    static conv_fpm_ms = 196.85;

    // 1 in = 2.54cm / 100 [m]
    static conv_in_m = 2.54 / 100;

    static motors = [
        {
            name: "Moons MS17HD6P4200 (e.g. MPX), holding torque (2A?)",
            nm: 0.63,
            link: 'https://www.moonsindustries.com/p/nema-17-standard-hybrid-stepper-motors/ms17hd6p4200-000004611110008905'
        },
        {
            name: "Moons MS17HD6P4200 (e.g. MPX), 50 RPM torque (1.5A)",
            nm: 0.3841,
            link: 'https://www.moonsindustries.com/p/nema-17-standard-hybrid-stepper-motors/ms17hd6p4200-000004611110008905'
        },
        {
            name: "Moons MS17HD6P4200 (e.g. MPX), <b>50 RPM</b> torque (2A/36V)",
            nm: 0.4819,
            link: 'https://www.moonsindustries.com/p/nema-17-standard-hybrid-stepper-motors/ms17hd6p4200-000004611110008905'
        },
        {
            name: "Moons MS17HD6P4200 (e.g. MPX), <b>750 RPM</b> torque (2A/36V)",
            nm: 0.3604,
            link: 'https://www.moonsindustries.com/p/nema-17-standard-hybrid-stepper-motors/ms17hd6p4200-000004611110008905'
        },
        {
            name: "Moons MS17HD6P4200 (e.g. MPX), <b>1500 RPM</b> torque (2A/36V)",
            nm: 0.2146,
            link: 'https://www.moonsindustries.com/p/nema-17-standard-hybrid-stepper-motors/ms17hd6p4200-000004611110008905'
        },
        {
            name: "OMC 17HS19-2504S-H-V1, holding torque (2.5A) [same for LDO 2504]",
            nm: 0.55,
            link: 'https://www.omc-stepperonline.com/nema-17-high-temp-stepper-motor-55ncm-77-93oz-in-55mm-round-shaft-insulation-class-h-180c-17hs19-2504s-h-v1'
        },
        {
            name: "LDO 42STH48-2804AH, holding torque (2.8A)",
            nm: 0.420,
            link: 'https://west3d.com/en-de/products/ldo-motors-42sth48-2804ah-super-speedy-super-power-high-temp-nema-17-stepper-motor-high-performance-high-temperature'
        },
        {
            name: "OMC NEMA23 Integrated Easy Servo Motor 90W 3000rpm 0.3Nm, rated torque",
            nm: 0.3,
            link: 'https://www.omc-stepperonline.com/nema-23-integrated-easy-servo-motor-90w-3000rpm-0-3nm-42-49oz-in-20-50vdc-brushless-dc-servo-motor-isv57t-090',
        },
        {
            name: "OMC NEMA23 Integrated Easy Servo Motor 90W 3000rpm 0.3Nm, peak torque",
            nm: 0.8,
            link: 'https://www.omc-stepperonline.com/nema-23-integrated-easy-servo-motor-90w-3000rpm-0-3nm-42-49oz-in-20-50vdc-brushless-dc-servo-motor-isv57t-090',
        },
    ]

    static round(x, i = 10) {
        return Math.round(x * i) / i;
    }

    // [GT3] page 18
    static pd_2mgt_gt3 = {
        "24": 0.602,
        "20": 0.501,
        "16": 0.401,
    }
    
    // [GT3] page 18
    static pd_3mgt_gt3 = {
        "24": 0.902,
        "20": 0.752,
        "16": 0.602,
    }

    // [GT2] page 18 (same as 2MGT GT3)
    static pd_2mr_gt2 = {
        "24": 0.602,
        "20": 0.501,
        "16": 0.401,
    }

    // density from R2_belt_tension.xlsx
    static belts = [
        {
            // [GT2] page 61
            name: "PowerGrip 2MR GT2 6mm",
            minimum_tst: 2.0,
            mass_factor: 0.039,
            general: 4,
			monolith_rec: 8,
            pd: this.pd_2mr_gt2,
            density: 0.0083,
        },
        {
            // [GT2] page 61
            name: "PowerGrip 2MR GT2 9mm",
            minimum_tst: 3.0,
            mass_factor: 0.058,
            general: 6,
			monolith_rec: 12,
            pd: this.pd_2mr_gt2,
            density: 0.0132,
        },
        {
            // [GT2] page 61
            name: "PowerGrip 2MR GT2 12mm",
            minimum_tst: 4.0,
            mass_factor: 0.077,
            general: 8,
			monolith_rec: "-",
            pd: this.pd_2mr_gt2,
            density: 0.01656,
        },
        
		{
            // [GT3] page 65
            name: "PowerGrip 2MGT GT3 6mm",
            minimum_tst: 2.1,
            mass_factor: 0.039,
            general: 10,
			monolith_rec: 20,
            pd: this.pd_2mgt_gt3,
            density: 0.0099,
        },
        {
            // [GT3] page 65
            name: "PowerGrip 2MGT GT3 9mm",
            minimum_tst: 3.2,
            mass_factor: 0.059,
            general: 17,
			monolith_rec: 34,
            pd: this.pd_2mgt_gt3,
            density: 0.01485,
        },
        {
            // [GT3] page 65
            name: "PowerGrip 2MGT GT3 12mm",
            minimum_tst: 4.2,
            mass_factor: 0.078,
            general: 24,
			monolith_rec: "-",
            pd: this.pd_2mgt_gt3,
            density: 0.0198,
        },
        {
            // [GT3] page 65
            name: "PowerGrip 3MGT GT3 6mm",
            minimum_tst: 2.4,
            mass_factor: 0.078,
            general: 14,
			monolith_rec: "-",
            pd: this.pd_3mgt_gt3,
            density: 0,
        },
        {
            // [GT3] page 65
            name: "PowerGrip 3MGT GT3 9mm",
            minimum_tst: 3.6,
            mass_factor: 0.117,
            general: 24,
			monolith_rec: "-",
            pd: this.pd_3mgt_gt3,
            density: 0,
        },
    ]

    static init() {
        console.log("init()");
        let tbl = document.getElementById('results');
        for (const b of TC.belts) {
            let row = document.createElement('tr');
            tbl.appendChild(row);
            
            let name = document.createElement('td');
            name.textContent = b.name;
            row.appendChild(name);

            let min = document.createElement('td');
            min.textContent = b.minimum_tst;
            row.appendChild(min);

            let range = document.createElement('td');
            range.innerHTML = TC.mk_set_hz(b, b.general * 1.5) + ' to ' + TC.mk_set_hz(b, b.general * 2.0);
            row.appendChild(range);

            let rec = document.createElement('td');
            rec.innerHTML = TC.mk_set_hz(b, b.monolith_rec);
            row.appendChild(rec);
            
            b.result = {
                tst: document.createElement('td'),
                rpm: document.createElement('td'),
                f_belt: document.createElement('td'),
                a_x_max: document.createElement('td'),
                a_y_max: document.createElement('td'),
            };
            b.result.tst.textContent = '...';
            b.result.rpm.textContent = '...';
            b.result.f_belt.textContent = '...';
            b.result.a_x_max.textContent = '...';
            b.result.a_y_max.textContent = '...';
            row.appendChild(b.result.tst);
            row.appendChild(b.result.rpm);

            let den = document.createElement('td');
            den.innerHTML = b.density;
            row.appendChild(den);

            row.appendChild(b.result.f_belt);
            row.appendChild(b.result.a_x_max);
            row.appendChild(b.result.a_y_max);
        }

        let list = document.getElementById('motors');
        for (const m of TC.motors) {
            let li = document.createElement('li');
            li.innerHTML = `<a href='javascript:TC.set_nm(${m.nm})'>Set to ${m.nm} Nm</a>: ${m.name} - <a href='${m.link}' target='_blank'>Source</a>`;
            list.appendChild(li);
        }
        
        TC.recompute();
        TC.hz();
    }

    static set_nm(x) {
        document.getElementById('t_hold').value = x;
        TC.recompute();
    }

    static recompute() {
        let t_1motor_Nm = parseFloat(document.getElementById('t_hold').value);
        let t_1motor_inlbs = t_1motor_Nm * TC.conv_inlb_Nm;
        let v_belt_fpm = parseFloat(document.getElementById('v_belt').value) / 1000 * TC.conv_fpm_ms;
        let n_drives = parseFloat(document.getElementById('n_drives').value);
        let n_pulley = parseFloat(document.getElementById('n_pulley').value);
        let l_belt_m = parseFloat(document.getElementById('l_belt').value) / 1000;
        let m_th_kg = parseFloat(document.getElementById('m_th').value) / 1000;
        let m_axis_kg = parseFloat(document.getElementById('m_axis').value) / 1000;
        
        // the worst case torque is the holding torque of the drives
        let t_total_inlbs = n_drives * t_1motor_inlbs;
        document.getElementById('i_t_total').textContent = TC.round(t_total_inlbs, 1000);
        document.getElementById('i_v_belt').textContent = TC.round(v_belt_fpm, 1000);

        // accelerated mass (ex belt).
        // we have two accelerations: x and y
        // the toolhead is accelerated along x and y
        // the gantry only y
        // two things I do not know:
        //  1. I am not sure how the forces are distributed, so just assume half/half
        //  2. The belt also needs to be accelerated; no idea where it goes, so just add it to both to be safe
        let m_x_kg = m_th_kg;
        let m_y_kg = m_th_kg + m_axis_kg;

        for (const b of TC.belts) {
            let pd_in = b.pd[n_pulley];

            // Formula 1, p. 65
            let tst = 1.21 * t_total_inlbs / pd_in
                + (b.mass_factor * (v_belt_fpm / 1000) * (v_belt_fpm / 1000));
            b.result.tst.innerHTML = TC.mk_set_hz(b, tst);

            // informative: compute pulley rpm:
            let rpm = v_belt_fpm * 3.820 / pd_in;
            b.result.rpm.textContent = Math.round(rpm);
        
            // compute forces + accel
            let f_belt_N = t_1motor_Nm * n_drives / (pd_in * TC.conv_in_m / 2);
            b.result.f_belt.textContent = TC.round(f_belt_N);

            let m_belt_kg = l_belt_m * b.density;
            let a_x_ms2 = f_belt_N / (m_x_kg + m_belt_kg) / 2;
            let a_y_ms2 = f_belt_N / (m_y_kg + m_belt_kg) / 2;
            b.result.a_x_max.textContent = TC.round(a_x_ms2);
            b.result.a_y_max.textContent = TC.round(a_y_ms2);
        }
        console.log("recompute()");
    }

    static active_hz = null;

    static mk_set_hz (b, force) {
        if (force == '-') {
            return force;
        }

        let rforce = TC.round(force, 10);
        if (b.density == 0) {
            return rforce;
        }
        return `<input type='button' onclick='TC.set_hz(this, ${b.density}, ${force})' value='${rforce}'>`;
    }
    
    static set_hz (el, d, f) {
        document.getElementById('hz_f_lbs').value = f;
        document.getElementById('hz_density').value = d;
        TC.hz(el);
    }

    static hz (el) {
        if (TC.active_hz !== null) {
            TC.active_hz.style.backgroundColor = null;
        }
        if (el !== undefined) {
            TC.active_hz = el;
            TC.active_hz.style.backgroundColor = '#ff6666';
        }
        let force_lbs = parseFloat(document.getElementById('hz_f_lbs').value);
        let d = parseFloat(document.getElementById('hz_density').value);
        let l = parseFloat(document.getElementById('hz_length').value);

        let force = TC.conv_lb_N * force_lbs; 
        let f = 1 / 2 / l * Math.sqrt(force / d) * 1000;
        document.getElementById('hz_out').textContent = TC.round(f, 10);
    }
}

console.log("JS sourced");
