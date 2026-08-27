<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4.028 13.252 3 10l2-7 7 5 8-3 1 9-9 3-5.144-1.255M5 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0c0 1.42.316 2.805 1 4\"/>";
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
