    // Ganti bagian ini di script Anda
    // const canvas = document.getElementById('game-canvas');
    // const ctx = canvas.getContext('2d');

    let scene, camera, renderer;
    let playerMesh, enemiesMesh = [], bulletsMesh = [], enemyBulletsMesh = [], bossMesh;

    function init3D() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement); // Ganti canvas 2D dengan renderer 3D

        // Tambahkan pencahayaan
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        // Posisi kamera
        camera.position.z = 5;
        camera.position.y = -2; // Sesuaikan agar terlihat dari atas
    }

    // Panggil init3D() saat game dimulai atau diinisialisasi
    // Misalnya, di awal script atau di fungsi startGame()
    init3D();
    