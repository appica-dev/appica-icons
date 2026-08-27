<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 12c2.76 0 5-2.01 5-4.5S14.76 3 12 3zm0 0c0 2.76 2.01 5 4.5 5s4.5-2.24 4.5-5zm0 0c-2.76 0-5 2.01-5 4.5S9.24 21 12 21zm0 0c0-2.76-2.01-5-4.5-5S3 9.24 3 12z\"/>";
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
