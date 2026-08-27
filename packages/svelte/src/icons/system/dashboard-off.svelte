<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.175 11.178a2 2 0 1 0 2.653 2.634M14.5 10.5l1-1M8.621 4.612a9 9 0 0 1 11.721 11.72m-1.516 2.488A9 9 0 0 1 17.6 20H6.4a9 9 0 0 1-.268-13.87M3 3l18 18\"/>";
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
