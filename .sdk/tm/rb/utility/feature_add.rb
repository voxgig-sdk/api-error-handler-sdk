# ApiErrorHandler SDK utility: feature_add
module ApiErrorHandlerUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
