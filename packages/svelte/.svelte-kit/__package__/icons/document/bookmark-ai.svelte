<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.02 18.32 6 21V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4.5M14 21v-4a2 2 0 0 1 4 0v4m-4-2h4m3-4v6\"/>";
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
