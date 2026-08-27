<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 2a4 4 0 1 0 8 0M4 3h1m14 0h1m-8 6v1m5.2-2.8.707.707M6.8 7.2l-.7.7M4 17h16m-10-4-1 8m5-8 1 8M4.28 21h15.44a1 1 0 0 0 .97-1.243l-1.5-6a1 1 0 0 0-.97-.757H5.78a1 1 0 0 0-.97.757l-1.5 6A1 1 0 0 0 4.28 21\"/>";
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
