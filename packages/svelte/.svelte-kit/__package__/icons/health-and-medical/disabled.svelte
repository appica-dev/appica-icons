<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.999 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v8h4l4 5m-8-9h5m-9 .5a5 5 0 1 0 6 7.5\"/>";
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
