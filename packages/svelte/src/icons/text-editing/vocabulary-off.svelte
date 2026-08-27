<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 3h3a2 2 0 0 1 2 2m0 0a2 2 0 0 1 2-2h6a1 1 0 0 1 1 1v13M12 5v3m7 11h-5a2 2 0 0 0-2 2m0 0a2 2 0 0 0-2-2H4a1 1 0 0 1-1-1V4c0-.279.114-.53.298-.712M12 21v-9m-5-1h1m8-4h1m-1 4h1M3 3l18 18\"/>";
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
