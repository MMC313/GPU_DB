const input = document.querySelector('.searchbar_input')
const searchBtn = document.querySelector('.searchbar_btn')
const stats = document.querySelector('.stats')
const gpuName = document.querySelector('.imgs_title')
const gpuFront = document.querySelector('.imgs_gpu')
const gpuBack = document.querySelector('.imgs_back')
const gpuFrontPcb = document.querySelector('.imgs_frontpcb')
const gpuBackPcb = document.querySelector('.imgs_backpcb')
const gpuTop = document.querySelector('.imgs_top')
const gpuBottom = document.querySelector('.imgs_bottom')
const gpuRear = document.querySelector('.imgs_rear')
const gpuIo = document.querySelector('.imgs_io')
const processorIcon = document.querySelector('.processor_val')
const coreIcon = document.querySelector('.cores_val')
const tmuIcon = document.querySelector('.tmus_val')
const ropIcon = document.querySelector('.rops_val')
const memorySizeIcon = document.querySelector('.memory_size_val')
const memoryTypeIcon = document.querySelector('.memory_type_val')
const busWidthIcon = document.querySelector('.bus_width_val')
const statsName = document.querySelector('.stats_name')
const statsVariant = document.querySelector('.stats_variant')
const statsArch = document.querySelector('.stats_architecture')
const statsFoundry = document.querySelector('.stats_foundry')
const statsProcessSize = document.querySelector('.stats_processSize')
const statsTransistors = document.querySelector('.stats_transistors')
const statsDie = document.querySelector('.stats_dieSize')
const statsChipPack = document.querySelector('.stats_chipPackage')
const statsRelease = document.querySelector('.stats_release')
const statsGen = document.querySelector('.stats_generation')
const statsPre = document.querySelector('.stats_pre')
const statsSuc = document.querySelector('.stats_suc')
const statsProd = document.querySelector('.stats_prod')
const statsPrice = document.querySelector('.stats_price')
const statsBus = document.querySelector('.stats_bus')
const statsBase = document.querySelector('.stats_base')
const statsBoost = document.querySelector('.stats_boost')
const statsMemClock = document.querySelector('.stats_memClock')
const statsMemSize = document.querySelector('.stats_memorySize')
const statsMemType = document.querySelector('.stats_memoryType')
const statsMemBus = document.querySelector('.stats_memoryBus')
const statsBandwidth = document.querySelector('.stats_bandwidth')
const statsShading= document.querySelector('.stats_shadingUnits')
const statsTmus = document.querySelector('.stats_tmus')
const statsRops = document.querySelector('.stats_rops')
const statsL1 = document.querySelector('.stats_l1Cache')
const statsL2 = document.querySelector('.stats_l2Cache')
const statsPixel = document.querySelector('.stats_pixelRate')
const statsTexture = document.querySelector('.stats_textureRate')
const statsFp16 = document.querySelector('.stats_fp16')
const statsFp32 = document.querySelector('.stats_fp32')
const statsFp64 = document.querySelector('.stats_fp64')
const statsDirect = document.querySelector('.stats_directx')
const statsOpengl = document.querySelector('.stats_opengl')
const statsOpencl = document.querySelector('.stats_opencl')
const statsVulkan = document.querySelector('.stats_vulkan')
const statsSlot = document.querySelector('.stats_slotWidth')
const statsLength= document.querySelector('.stats_length')
const statsWidth = document.querySelector('.stats_width')
const statsHeight = document.querySelector('.stats_height')
const statsTdp = document.querySelector('.stats_tdp')
const statsPsu = document.querySelector('.stats_suggestedPsu')
const statsOutputs = document.querySelector('.stats_outputs')
const statsConnectors = document.querySelector('.stats_powerConnectors')
const statsBoard = document.querySelector('.stats_boardNumber')


const baseUrl = "https://gpu-db.onrender.com/results?"
const options= {
    method: 'GET'
}

searchBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    loadImages()
    loadStatIcons()
    loadStats()
    input.value = ""  
})

async function loadInfo(searchInput){  
    let res = await fetch(baseUrl + new URLSearchParams({search:searchInput}),options)
    let data = await res.json()

    console.log(data.documents[0])
    return data.documents[0]
}

async function loadImages(){
    
    let apiData = await loadInfo(input.value)
    let gpuID = apiData.url.split(".c")

    gpuName.innerHTML = apiData.gpu_name
    gpuFront.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-front.jpg`
    gpuBack.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-back.jpg`
    gpuFrontPcb.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-pcb-front.jpg`
    gpuBackPcb.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-pcb-back.jpg`
    gpuTop.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-top.jpg`
    gpuBottom.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-bottom.jpg`
    gpuRear.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-rear.jpg`
    gpuIo.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-i-o.jpg`
}

async function loadStatIcons(){
    let apiData = await loadInfo(input.value)

   processorIcon.innerHTML = apiData.graphics_processor.gpu_name
   coreIcon.innerHTML = apiData.render_config.shading_units
   tmuIcon.innerHTML = apiData.render_config.tmus
   ropIcon.innerHTML = apiData.render_config.rops
   memorySizeIcon.innerHTML = apiData.memory.memory_size
   memoryTypeIcon.innerHTML = apiData.memory.memory_type
   busWidthIcon.innerHTML = apiData.memory.memory_bus
   
}

async function loadStats(){
    let apiData = await loadInfo(input.value)

    statsName.innerHTML = `GPU Name: ${apiData.graphics_processor.gpu_name} `
    statsVariant.innerHTML = `GPU Variant: ${apiData.graphics_processor.gpu_variant}`
    statsArch.innerHTML = `Architecture: ${apiData.graphics_processor.architecture}`
    statsFoundry.innerHTML = `Foundry: ${apiData.graphics_processor.foundry}`
    statsProcessSize.innerHTML = `Process Size: ${apiData.graphics_processor.process_size}`
    statsTransistors.innerHTML = `Transistors: ${apiData.graphics_processor.transistors}`
    statsDie.innerHTML = `Die Size: ${apiData.graphics_processor.die_size}`
    statsRelease.innerHTML = `Release Date: ${apiData.graphics_card.release_date}`
    statsGen.innerHTML = `Generation: ${apiData.graphics_card.generation}`
    statsPre.innerHTML = `Predecessor: ${apiData.graphics_card.predecessor}`
    statsSuc.innerHTML = `Successor: ${apiData.graphics_card.successor}`
    statsProd.innerHTML = `Production: ${apiData.graphics_card.production}`
    statsPrice.innerHTML = `Launch Price: ${apiData.graphics_card.launch_price}`
    statsBus.innerHTML = `Bus Interface: ${apiData.graphics_card.bus_interface}`
    statsBase.innerHTML = `Base Clock: ${apiData.clock_speeds.base_clock}`
    statsBoost.innerHTML = `Boost Clock: ${apiData.clock_speeds.boost_clock}`
    statsMemClock.innerHTML = `Memory Clock: ${apiData.clock_speeds.memory_clock}`
    statsMemSize.innerHTML = `Memory Size: ${apiData.memory.memory_size}`
    statsMemType.innerHTML = `Memory Type: ${apiData.memory.memory_type}`
    statsMemBus.innerHTML = `Memory Bus: ${apiData.memory.memory_bus}`
    statsBandwidth.innerHTML = `Bandwidth: ${apiData.memory.bandwidth}`
    statsShading.innerHTML = `Shading Units: ${apiData.render_config.shading_units}`
    statsTmus.innerHTML = `TMUs: ${apiData.render_config.tmus}`
    statsRops.innerHTML = `ROPs: ${apiData.render_config.rops}`
    statsL1.innerHTML = `L1 Cache: ${apiData.render_config.l1_cache}`
    statsL2.innerHTML = `L2 Cache: ${apiData.render_config.l2_cache}`
    statsPixel.innerHTML = `Pixel Rate: ${apiData.theoretical_performance.pixel_rate}`
    statsTexture.innerHTML = `Texture Rate: ${apiData.theoretical_performance.texture_rate}`
    statsFp16.innerHTML = `FP16: ${apiData.theoretical_performance['fp16_(half)_performance']}`
    statsFp32.innerHTML = `FP32: ${apiData.theoretical_performance['fp32_(float)_performance']}`
    statsFp64.innerHTML = `FP64: ${apiData.theoretical_performance['fp64_(double)_performance']}`
    statsDirect.innerHTML = `DirectX: ${apiData.graphics_features.directx}`
    statsOpengl.innerHTML = `OpenGL: ${apiData.graphics_features.opengl}`
    statsOpencl.innerHTML = `OpenCL: ${apiData.graphics_features.opencl}`
    statsVulkan.innerHTML = `Vulkan: ${apiData.graphics_features.vulkan}`
    statsSlot.innerHTML = `Slot Width: ${apiData.board_design.slot_width}`
    statsLength.innerHTML = `Length: ${apiData.board_design.length}`
    statsWidth.innerHTML = `Width: ${apiData.board_design.width}` 
    statsHeight.innerHTML = `Height: ${apiData.board_design.height}`
    statsTdp.innerHTML = `TDP: ${apiData.board_design.tdp}`
    statsPsu.innerHTML = `Suggested PSU: ${apiData.board_design.suggested_psu}`
    statsOutputs.innerHTML = `Outputs: ${apiData.board_design.outputs}`
    statsConnectors.innerHTML = `Power Connectors: ${apiData.board_design.power_connectors}`
    statsBoard.innerHTML = `Board Number: ${apiData.board_design.board_number}`


}

async function loadInitialImages(){

    let apiData = await loadInfo("NVIDIA GeForce RTX 4090")
    let gpuID = apiData.url.split(".c")

    gpuName.innerHTML = apiData.gpu_name
    gpuFront.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-front.jpg`
    gpuBack.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-back.jpg`
    gpuFrontPcb.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-pcb-front.jpg`
    gpuBackPcb.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-pcb-back.jpg`
    gpuTop.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-top.jpg`
    gpuBottom.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-bottom.jpg`
    gpuRear.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-rear.jpg`
    gpuIo.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-i-o.jpg`
}

async function loadInitialStatIcons(){
    let apiData = await loadInfo("NVIDIA GeForce RTX 4090")

    processorIcon.innerHTML = apiData.graphics_processor.gpu_name
    coreIcon.innerHTML = apiData.render_config.shading_units
    tmuIcon.innerHTML = apiData.render_config.tmus
    ropIcon.innerHTML = apiData.render_config.rops
    memorySizeIcon.innerHTML = apiData.memory.memory_size
    memoryTypeIcon.innerHTML = apiData.memory.memory_type
    busWidthIcon.innerHTML = apiData.memory.memory_bus
    
}

async function loadInitialStats(){
    let apiData = await loadInfo("NVIDIA GeForce RTX 4090")

    statsName.innerHTML = `GPU Name: ${apiData.graphics_processor.gpu_name} `
    statsVariant.innerHTML = `GPU Variant: ${apiData.graphics_processor.gpu_variant}`
    statsArch.innerHTML = `Architecture: ${apiData.graphics_processor.architecture}`
    statsFoundry.innerHTML = `Foundry: ${apiData.graphics_processor.foundry}`
    statsProcessSize.innerHTML = `Process Size: ${apiData.graphics_processor.process_size}`
    statsTransistors.innerHTML = `Transistors: ${apiData.graphics_processor.transistors}`
    statsDie.innerHTML = `Die Size: ${apiData.graphics_processor.die_size}`
    statsRelease.innerHTML = `Release Date: ${apiData.graphics_card.release_date}`
    statsGen.innerHTML = `Generation: ${apiData.graphics_card.generation}`
    statsPre.innerHTML = `Predecessor: ${apiData.graphics_card.predecessor}`
    statsSuc.innerHTML = `Successor: ${apiData.graphics_card.successor}`
    statsProd.innerHTML = `Production: ${apiData.graphics_card.production}`
    statsPrice.innerHTML = `Launch Price: ${apiData.graphics_card.launch_price}`
    statsBus.innerHTML = `Bus Interface: ${apiData.graphics_card.bus_interface}`
    statsBase.innerHTML = `Base Clock: ${apiData.clock_speeds.base_clock}`
    statsBoost.innerHTML = `Boost Clock: ${apiData.clock_speeds.boost_clock}`
    statsMemClock.innerHTML = `Memory Clock: ${apiData.clock_speeds.memory_clock}`
    statsMemSize.innerHTML = `Memory Size: ${apiData.memory.memory_size}`
    statsMemType.innerHTML = `Memory Type: ${apiData.memory.memory_type}`
    statsMemBus.innerHTML = `Memory Bus: ${apiData.memory.memory_bus}`
    statsBandwidth.innerHTML = `Bandwidth: ${apiData.memory.bandwidth}`
    statsShading.innerHTML = `Shading Units: ${apiData.render_config.shading_units}`
    statsTmus.innerHTML = `TMUs: ${apiData.render_config.tmus}`
    statsRops.innerHTML = `ROPs: ${apiData.render_config.rops}`
    statsL1.innerHTML = `L1 Cache: ${apiData.render_config.l1_cache}`
    statsL2.innerHTML = `L2 Cache: ${apiData.render_config.l2_cache}`
    statsPixel.innerHTML = `Pixel Rate: ${apiData.theoretical_performance.pixel_rate}`
    statsTexture.innerHTML = `Texture Rate: ${apiData.theoretical_performance.texture_rate}`
    statsFp16.innerHTML = `FP16: ${apiData.theoretical_performance['fp16_(half)_performance']}`
    statsFp32.innerHTML = `FP32: ${apiData.theoretical_performance['fp32_(float)_performance']}`
    statsFp64.innerHTML = `FP64: ${apiData.theoretical_performance['fp64_(double)_performance']}`
    statsDirect.innerHTML = `DirectX: ${apiData.graphics_features.directx}`
    statsOpengl.innerHTML = `OpenGL: ${apiData.graphics_features.opengl}`
    statsOpencl.innerHTML = `OpenCL: ${apiData.graphics_features.opencl}`
    statsVulkan.innerHTML = `Vulkan: ${apiData.graphics_features.vulkan}`
    statsSlot.innerHTML = `Slot Width: ${apiData.board_design.slot_width}`
    statsLength.innerHTML = `Length: ${apiData.board_design.length}`
    statsWidth.innerHTML = `Width: ${apiData.board_design.width}` 
    statsHeight.innerHTML = `Height: ${apiData.board_design.height}`
    statsTdp.innerHTML = `TDP: ${apiData.board_design.tdp}`
    statsPsu.innerHTML = `Suggested PSU: ${apiData.board_design.suggested_psu}`
    statsOutputs.innerHTML = `Outputs: ${apiData.board_design.outputs}`
    statsConnectors.innerHTML = `Power Connectors: ${apiData.board_design.power_connectors}`
    statsBoard.innerHTML = `Board Number: ${apiData.board_design.board_number}`


}


loadInitialImages()
loadInitialStatIcons()
loadInitialStats()