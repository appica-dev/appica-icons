<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 3c0 8.284-4.03 15-9 15S3 11.284 3 3m0 18h1.059m11.647 0h1.059m3.176 0H21M7.235 21h1.06m3.176 0h1.058\"/>";
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
