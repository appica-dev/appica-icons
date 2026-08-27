<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 11h-1a2 2 0 0 0-2 2v2c0 1.105-.396 2-1.5 2H14m-4-3h3m-4.514 7h7.026a4 4 0 0 0 3.808-5.224l-1.706-5.306A5 5 0 0 0 12.854 7h-1.71a5 5 0 0 0-4.76 3.47l-1.706 5.306A4 4 0 0 0 8.486 21M15 3q-1 4-3 4T9 3z\"/>";
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
