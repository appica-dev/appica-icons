<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 5h9a3 3 0 0 1 3 3v8c0 .296-.044.59-.13.874m-2.006 2c-.28.084-.571.126-.864.126H6a3 3 0 0 1-3-3V8c0-1.35.893-2.493 2.12-2.869M7 15h5m5-3h-1m-4 0h-2M3 3l18 18\"/>";
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
