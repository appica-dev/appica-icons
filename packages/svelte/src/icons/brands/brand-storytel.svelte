<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4.107 22C6.41 19.067 21 19.57 21 10.462 21 4.164 16.006 2 12.515 2S3 5.036 3 13.241C3 19.615 4.107 22 4.107 22\"/>";
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
