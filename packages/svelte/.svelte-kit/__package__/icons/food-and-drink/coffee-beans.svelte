<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13 5.649c-2.842-2.842-6.792-3.5-8.822-1.47m0 0c-2.03 2.03-1.371 5.979 1.47 8.821m-1.47-8.822c.245 1.226 1.544 3.896 4.78 4.778M9.21 19.79c2.086 2.086 6.146 1.41 9.067-1.511 2.92-2.921 3.597-6.98 1.51-9.067M9.212 19.79c-2.086-2.087-1.41-6.146 1.511-9.067 2.921-2.92 6.98-3.597 9.067-1.51M9.21 19.788c1.511-.504 4.372-.917 5.667-5.667.907-3.324 3.652-4.659 4.91-4.91\"/>";
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
