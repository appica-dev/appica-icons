<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m7.996 13.01 2.998-1.998 1.998 1.997 2.998-1.997M3 20l1.299-3.895c-1.123-1.66-1.529-3.625-1.143-5.53s1.538-3.622 3.241-4.83 3.843-1.825 6.02-1.737c2.177.089 4.244.876 5.816 2.217 1.573 1.34 2.544 3.143 2.733 5.071.19 1.93-.417 3.854-1.705 5.416-1.288 1.561-3.17 2.654-5.298 3.076-2.127.42-4.354.141-6.267-.787z\"/>";
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
