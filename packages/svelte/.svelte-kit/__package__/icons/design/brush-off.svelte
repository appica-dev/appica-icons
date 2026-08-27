<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.691 7.704A16 16 0 0 1 21 3a16 16 0 0 1-4.697 9.302M9.896 9.916A16 16 0 0 0 8.2 13.2m5.908.888A16 16 0 0 1 10.8 15.8M3 3l18 18M3 17a4 4 0 1 1 4 4H3z\"/>";
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
