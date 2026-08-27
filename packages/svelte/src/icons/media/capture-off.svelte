<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.5 16.25v2.125A2.125 2.125 0 0 0 5.625 20.5H7.75m8.5-17h2.125A2.125 2.125 0 0 1 20.5 5.625V7.75M16.25 20.5h2.125c.589 0 1.12-.24 1.506-.626M9.737 9.754a3.188 3.188 0 0 0 4.52 4.495m.617-3.63a3.2 3.2 0 0 0-1.487-1.49M3.5 7.75V5.625c0-.582.234-1.11.613-1.493M3 3l18 18\"/>";
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
