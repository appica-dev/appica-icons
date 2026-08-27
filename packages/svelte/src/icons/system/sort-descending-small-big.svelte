<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m10 15-3 3m0 0-3-3m3 3V6m7 12.333c0 .369.298.667.667.667h2.666a.667.667 0 0 0 .667-.667v-2.666a.667.667 0 0 0-.667-.667h-2.666a.667.667 0 0 0-.667.667zm0-7.5c0 .645.522 1.167 1.167 1.167h4.666c.645 0 1.167-.522 1.167-1.167V6.167C21 5.522 20.478 5 19.833 5h-4.666C14.522 5 14 5.522 14 6.167z\"/>";
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
