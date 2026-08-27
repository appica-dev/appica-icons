<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18 17.5v.01M6 17.5v.01M12 6.5v.01m0 6.99v.01M12 2.5a4 4 0 0 1 2.001 7.464l.001.072a4 4 0 0 1 1.987 3.758l.22.128a4 4 0 0 1 1.591-.417l.2-.005a4 4 0 1 1-3.994 3.77l-.28-.16c-.522.25-1.108.39-1.726.39-.619 0-1.205-.14-1.728-.391l-.279.16.007.231a4 4 0 1 1-2.212-3.579l.222-.129a4 4 0 0 1 1.988-3.756L10 9.965A4 4 0 0 1 8.005 6.7L8 6.5a4 4 0 0 1 4-4\"/>";
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
