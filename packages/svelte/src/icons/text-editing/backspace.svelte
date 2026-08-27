<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m11.68 10 4.142 4m0-4-4.142 4m8.284-8c.275 0 .539.105.733.293A.98.98 0 0 1 21 7v10c0 .265-.11.52-.303.707a1.06 1.06 0 0 1-.733.293H8.574l-5.178-5A1.47 1.47 0 0 1 3 12c0-.369.14-.725.396-1l5.177-5z\"/>";
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
