/*
 Copyright (c) 2021-2024 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

/**
 * ========================= !DO NOT CHANGE THE FOLLOWING SECTION MANUALLY! =========================
 * The following section is auto-generated.
 * ========================= !DO NOT CHANGE THE FOLLOWING SECTION MANUALLY! =========================
 */
/* eslint-disable max-len */
import { Material, Texture2D, gfx, ccenum } from 'cc';

const { SampleCount } = gfx;

export interface MSAA {
    enabled: boolean; /* false */
    sampleCount: gfx.SampleCount; /* SampleCount.X4 */
    [name: string]: unknown;
}

export interface ForwardPassConfigs {
    enableMainLightShadowMap: boolean;
    enableMainLightPlanarShadowMap: boolean;
    enablePlanarReflectionProbe: boolean;
    enableMSAA: boolean;
    enableSingleForwardPass: boolean;
}

export function makeMSAA(): MSAA {
    return {
        enabled: false,
        sampleCount: SampleCount.X4,
    };
}

export function fillRequiredMSAA(value: MSAA): void {
    if (value.enabled === undefined) {
        value.enabled = false;
    }
    if (value.sampleCount === undefined) {
        value.sampleCount = SampleCount.X4;
    }
}

export interface HBAO {
    enabled: boolean; /* false */
    radiusScale: number; /* 1 */
    angleBiasDegree: number; /* 10 */
    blurSharpness: number; /* 3 */
    aoSaturation: number; /* 1 */
    needBlur: boolean; /* false */
    [name: string]: unknown;
}

export function makeHBAO(): HBAO {
    return {
        enabled: false,
        radiusScale: 1,
        angleBiasDegree: 10,
        blurSharpness: 3,
        aoSaturation: 1,
        needBlur: false,
    };
}

export function fillRequiredHBAO(value: HBAO): void {
    if (value.enabled === undefined) {
        value.enabled = false;
    }
    if (value.radiusScale === undefined) {
        value.radiusScale = 1;
    }
    if (value.angleBiasDegree === undefined) {
        value.angleBiasDegree = 10;
    }
    if (value.blurSharpness === undefined) {
        value.blurSharpness = 3;
    }
    if (value.aoSaturation === undefined) {
        value.aoSaturation = 1;
    }
    if (value.needBlur === undefined) {
        value.needBlur = false;
    }
}

export enum BloomType {
    MipmapFilter,
    KawaseDualFilter,
}
ccenum(BloomType);
export interface Bloom {
    enabled: boolean; /* false */
    type: BloomType;
    /* refcount */ kawaseFilterMaterial: Material | null;
    mipmapFilterMaterial: Material | null;
    enableAlphaMask: boolean; /* false */
    iterations: number; /* 3 */
    threshold: number; /* 0.8 */
    intensity: number; /* 1 */
    [name: string]: unknown;
}

export function makeBloom(): Bloom {
    return {
        enabled: false,
        type: BloomType.KawaseDualFilter,
        kawaseFilterMaterial: null,
        mipmapFilterMaterial: null,
        enableAlphaMask: false,
        iterations: 3,
        threshold: 0.8,
        intensity: 1,
    };
}

export function fillRequiredBloom(value: Bloom): void {
    if (value.enabled === undefined) {
        value.enabled = false;
    }
    if (value.type === undefined) {
        value.type = BloomType.KawaseDualFilter;
    }
    if (!value.kawaseFilterMaterial) {
        value.kawaseFilterMaterial = null;
    }
    if (!value.mipmapFilterMaterial) {
        value.mipmapFilterMaterial = null;
    }
    if (!value.enableAlphaMask) {
        value.enableAlphaMask = false;
    }
    if (value.iterations === undefined) {
        value.iterations = 3;
    }
    if (value.threshold === undefined) {
        value.threshold = 0.8;
    }
    if (value.intensity === undefined) {
        value.intensity = 1;
    }
}

export interface ColorGrading {
    enabled: boolean; /* false */
    /* refcount */ material: Material | null;
    contribute: number; /* 1 */
    /* refcount */ colorGradingMap: Texture2D | null;
    [name: string]: unknown;
}

export function makeColorGrading(): ColorGrading {
    return {
        enabled: false,
        material: null,
        contribute: 1,
        colorGradingMap: null,
    };
}

export function fillRequiredColorGrading(value: ColorGrading): void {
    if (value.enabled === undefined) {
        value.enabled = false;
    }
    if (value.material === undefined) {
        value.material = null;
    }
    if (value.contribute === undefined) {
        value.contribute = 1;
    }
    if (value.colorGradingMap === undefined) {
        value.colorGradingMap = null;
    }
}

export interface FSR {
    enabled: boolean; /* false */
    /* refcount */ material: Material | null;
    sharpness: number; /* 0.8 */
    [name: string]: unknown;
}

export function makeFSR(): FSR {
    return {
        enabled: false,
        material: null,
        sharpness: 0.8,
    };
}

export function fillRequiredFSR(value: FSR): void {
    if (value.enabled === undefined) {
        value.enabled = false;
    }
    if (value.material === undefined) {
        value.material = null;
    }
    if (value.sharpness === undefined) {
        value.sharpness = 0.8;
    }
}

export interface FXAA {
    enabled: boolean; /* false */
    /* refcount */ material: Material | null;
    [name: string]: unknown;
}

export function makeFXAA(): FXAA {
    return {
        enabled: false,
        material: null,
    };
}

export function fillRequiredFXAA(value: FXAA): void {
    if (value.enabled === undefined) {
        value.enabled = false;
    }
    if (value.material === undefined) {
        value.material = null;
    }
}

export interface ToneMapping {
    /* refcount */ material: Material | null;
    [name: string]: unknown;
}

export function makeToneMapping(): ToneMapping {
    return {
        material: null,
    };
}

export function fillRequiredToneMapping(value: ToneMapping): void {
    if (value.material === undefined) {
        value.material = null;
    }
}

export interface PipelineSettings {
    readonly msaa: MSAA;
    enableShadingScale: boolean; /* false */
    shadingScale: number; /* 0.5 */
    readonly bloom: Bloom;
    readonly toneMapping: ToneMapping;
    readonly colorGrading: ColorGrading;
    readonly fsr: FSR;
    readonly fxaa: FXAA;
    [name: string]: unknown;
}

export function makePipelineSettings(): PipelineSettings {
    return {
        msaa: makeMSAA(),
        enableShadingScale: false,
        shadingScale: 0.5,
        bloom: makeBloom(),
        toneMapping: makeToneMapping(),
        colorGrading: makeColorGrading(),
        fsr: makeFSR(),
        fxaa: makeFXAA(),
    };
}

export function fillRequiredPipelineSettings(value: PipelineSettings): void {
    if (!value.msaa) {
        (value.msaa as MSAA) = makeMSAA();
    } else {
        fillRequiredMSAA(value.msaa);
    }
    if (value.enableShadingScale === undefined) {
        value.enableShadingScale = false;
    }
    if (value.shadingScale === undefined) {
        value.shadingScale = 0.5;
    }
    if (!value.bloom) {
        (value.bloom as Bloom) = makeBloom();
    } else {
        fillRequiredBloom(value.bloom);
    }
    if (!value.toneMapping) {
        (value.toneMapping as ToneMapping) = makeToneMapping();
    } else {
        fillRequiredToneMapping(value.toneMapping);
    }
    if (!value.colorGrading) {
        (value.colorGrading as ColorGrading) = makeColorGrading();
    } else {
        fillRequiredColorGrading(value.colorGrading);
    }
    if (!value.fsr) {
        (value.fsr as FSR) = makeFSR();
    } else {
        fillRequiredFSR(value.fsr);
    }
    if (!value.fxaa) {
        (value.fxaa as FXAA) = makeFXAA();
    } else {
        fillRequiredFXAA(value.fxaa);
    }
}
