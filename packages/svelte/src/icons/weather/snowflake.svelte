<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m10 4 2 1 2-1m-2-2v6.5l3 1.72m2.928-3.952.134 2.232 1.866 1.232M20.66 7l-5.63 3.25.01 3.458m4.888.56L18.062 15.5l-.134 2.232M20.66 17l-5.63-3.25-2.99 1.738M14 20l-2-1-2 1m2 2v-6.5l-3-1.72m-2.928 3.952L5.938 15.5l-1.866-1.232M3.34 17l5.629-3.25-.01-3.458m-4.887-.56L5.938 8.5l.134-2.232M3.34 7l5.629 3.25 2.99-1.738\"/>";
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
