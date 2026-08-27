<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m18 20-2-2V6c0-1.121.879-2 2-2s2 .879 2 2v12zm0 0H5a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H6m10-4h4\"/>";
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
