<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 22a2 2 0 0 0 .994-.265l7-4.007A2 2 0 0 0 21 15.993V8.007a2 2 0 0 0-1.006-1.735l-7-4.007a2 2 0 0 0-1.988 0l-7 4.007A2 2 0 0 0 3 8.007v7.986a2 2 0 0 0 1.006 1.735l7 4.007A2 2 0 0 0 12 22m0 0v-5M3.29 6.97 7.5 9m0 0 4.26-6.97M7.5 9l-4.3 7.84M7.5 9l4.5 8M7.5 9h9m4.21-2.03L16.5 9m0 0q-1.463-2.53-4.26-6.97M16.5 9q1.463 2.53 4.3 7.84M16.5 9 12 17m8.7 0H3.3\"/>";
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
