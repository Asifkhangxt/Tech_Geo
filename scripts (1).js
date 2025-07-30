document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('.smooth-scroll').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Contact form validation (currently disabled since Contact section is removed)
    // const form = document.getElementById('contact-form');
    // if (form) {
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         const name = document.getElementById('name').value.trim();
    //         const email = document.getElementById('email').value.trim();
    //         const message = document.getElementById('message').value.trim();

    //         if (!name || !email || !message) {
    //             alert('Please fill out all fields.');
    //             return;
    //         }

    //         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    //             alert('Please enter a valid email address.');
    //             return;
    //         }

    //         alert('Message sent successfully! (This is a demo.)');
    //         form.reset();
    //     });
    // }

    // Modal functionality
    window.openModal = (projectId) => {
        const modal = document.getElementById('modal');
        const title = document.getElementById('modal-title');
        const description = document.getElementById('modal-description');
        const tools = document.getElementById('modal-tools');
        const link = document.getElementById('modal-link');

        const projects = {
            project1: {
                title: 'Mineral Mapping in XYZ Region',
                description: 'Geological Mapping of different regions, delivering detailed resource maps.',
                tools: 'Tools: Acr GIS, Python, Google Earth Pro',
                link: 'https://github.com/asifkhan/mineral-mapping',
            },
            project2: {
                title: 'Flood Risk Model',
                description: 'Developed an interactive Streamlit app to predict flood risks using historical and geospatial data.',
                tools: 'Tools: Python, Streamlit',
                link: 'https://github.com/asifkhan/flood-risk',
            },
            project3: {
                title: 'Geotechnical Lab Testing app',
                description: 'Created Geotechnical lab testing app to minimize errors in calculation.',
                tools: 'Tools: streamlit, NumPy, Pandas, plotpy',
                link: 'https://huggingface.co/spaces/Asifkhan-12/Geotechnical_testing_app',
            },
        };

        title.textContent = projects[projectId].title;
        description.textContent = projects[projectId].description;
        tools.textContent = projects[projectId].tools;
        link.href = projects[projectId].link;
        link.textContent = projects[projectId].link ? 'View on GitHub' : '';
        link.style.display = projects[projectId].link ? 'block' : 'none';

        modal.classList.remove('hidden');
    };

    window.closeModal = () => {
        document.getElementById('modal').classList.add('hidden');
    };
});
