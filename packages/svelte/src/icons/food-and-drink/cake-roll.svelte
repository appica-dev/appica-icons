<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 4C7.03 4 3 6.462 3 9.5S7.03 15 12 15s9-2.462 9-5.5S16.97 4 12 4m0 0C9.5 4 8 5.849 8 7.959c0 3.959 8 3.795 8 .99 0-.943-1-1.979-4-1.979m9 2.363v5.334C21 17.612 16.97 20 12 20s-9-2.388-9-5.333V9.333\"/>";
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
