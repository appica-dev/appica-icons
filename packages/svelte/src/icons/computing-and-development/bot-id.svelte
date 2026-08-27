<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 6.375v2.25M9.75 12v.011m4.5-.011v.011M3 7.5V5.25A2.25 2.25 0 0 1 5.25 3H7.5M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21H7.5m9-18h2.25A2.25 2.25 0 0 1 21 5.25V7.5M16.5 21h2.25A2.25 2.25 0 0 0 21 18.75V16.5M6.375 10.313c0-.932.84-1.688 1.875-1.688h7.5c1.035 0 1.875.756 1.875 1.688v3.374c0 .932-.84 1.688-1.875 1.688h-7.5c-1.035 0-1.875-.756-1.875-1.687z\"/>";
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
