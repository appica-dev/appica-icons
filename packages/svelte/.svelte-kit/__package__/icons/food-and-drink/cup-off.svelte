<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 8H5v3h6m4 0h4V8h-7m5.5 3-.323 2.154m-.525 3.497L16 21H8L6.5 11M6 8V7c0-.296.064-.577.18-.83M9 5h7a2 2 0 0 1 2 2v1m-3-3V3M3 3l18 18\"/>";
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
