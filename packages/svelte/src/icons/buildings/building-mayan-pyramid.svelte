<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.5 17H4m0 0c-1.655 0-2 .345-2 2v1c0 1.655.345 2 2 2h16c1.655 0 2-.345 2-2v-1c0-1.655-.345-2-2-2M4 17v-3c0-1.655.345-2 2-2m9.5 5H20m0 0v-3c0-1.655-.345-2-2-2m-9 0H6m0 0V9c0-1.655.345-2 2-2h8c1.655 0 2 .345 2 2v3m-3 0h3M9 7V4c0-1.655.345-2 2-2h2c1.655 0 2 .345 2 2v3m-1.5 0L16 22M10.5 7 8 22\"/>";
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
