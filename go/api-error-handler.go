package voxgigapierrorhandlersdk

import (
	"github.com/voxgig-sdk/api-error-handler-sdk/core"
	"github.com/voxgig-sdk/api-error-handler-sdk/entity"
	"github.com/voxgig-sdk/api-error-handler-sdk/feature"
	_ "github.com/voxgig-sdk/api-error-handler-sdk/utility"
)

// Type aliases preserve external API.
type ApiErrorHandlerSDK = core.ApiErrorHandlerSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ApiErrorHandlerEntity = core.ApiErrorHandlerEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ApiErrorHandlerError = core.ApiErrorHandlerError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewLogoGenerationEntityFunc = func(client *core.ApiErrorHandlerSDK, entopts map[string]any) core.ApiErrorHandlerEntity {
		return entity.NewLogoGenerationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewApiErrorHandlerSDK = core.NewApiErrorHandlerSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
