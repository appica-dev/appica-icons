<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 7c0 1.06.843 2.078 2.343 2.828S9.878 11 12 11s4.157-.421 5.657-1.172S20 8.061 20 7M4 7c0-1.06.843-2.078 2.343-2.828S9.878 3 12 3s4.157.421 5.657 1.172S20 5.939 20 7M4 7c0 .664.088 1.324.263 1.965L7 19c.5 1.5 2.239 2 5 2s4.5-.5 5-2q.5-1.5 2.737-10.035A7.5 7.5 0 0 0 20 7\"/>";
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
