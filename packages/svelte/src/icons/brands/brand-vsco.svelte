<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 12a9 9 0 0 1-2.636 6.364M21 12a9 9 0 0 0-2.636-6.364M21 12h-4m1.364 6.364A9 9 0 0 1 12 21m6.364-2.636-2.828-2.828M12 21a9 9 0 0 1-6.364-2.636M12 21v-4m-6.364 1.364A9 9 0 0 1 3 12m2.636 6.364 2.828-2.828M3 12a9 9 0 0 1 2.636-6.364M3 12h4M5.636 5.636A9 9 0 0 1 12 3M5.636 5.636l2.828 2.828M12 3a9 9 0 0 1 6.364 2.636M12 3v4m6.364-1.364-2.828 2.828M17 12a5 5 0 0 0-1.464-3.536M17 12a5 5 0 0 1-1.464 3.536m0-7.072A5 5 0 0 0 12 7m0 0a5 5 0 0 0-3.536 1.464m0 0A5 5 0 0 0 7 12m0 0a5 5 0 0 0 1.464 3.536m0 0A5 5 0 0 0 12 17m0 0a5 5 0 0 0 3.536-1.464\"/>";
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
