<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 8.996v8.056a2.005 2.005 0 0 1-1.997 2.003c-.35 0-.695-.091-.999-.266l-1.568-.901A3 3 0 0 1 3 15.323V8.677a3.01 3.01 0 0 1 1.436-2.564l6-3.672a3 3 0 0 1 3.128 0l6 3.672A3 3 0 0 1 21 8.678v6.645a3.01 3.01 0 0 1-1.436 2.564l-6 3.672a3 3 0 0 1-3.128 0M17 8.996h-3.5a1.5 1.5 0 0 0-1.5 1.502 1.504 1.504 0 0 0 1.5 1.503h2a1.5 1.5 0 0 1 1.5 1.502 1.504 1.504 0 0 1-1.5 1.502H12\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
